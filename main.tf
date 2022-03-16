terraform {
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 3.27"
    }
  }

  required_version = ">= 0.14.9"
}

provider "aws" {
  profile = "default"
  region  = "eu-west-3"
}

resource "aws_instance" "machine01" {
  ami                         = "ami-0960de83329d12f2f"
  instance_type               = "t2.micro"
  associate_public_ip_address = true
  key_name                    = var.key_name
  vpc_security_group_ids      = [aws_security_group.sg_acme.id]

  root_block_device {
    volume_size = 20
  }

  tags = {
    Name = "DOServerInstanceFinal"
  }

  connection {
    type        = "ssh"
    host        = self.public_ip
    user        = "ec2-user"
    private_key = file(var.key_path)
  }


  provisioner "remote-exec" {
    inline = [
      "sudo yum update -y",
      "sudo yum install -y docker httpd-tools",
      "sudo yum install -y git",
      "sudo usermod -a -G docker ec2-user",
      "sudo service docker start",
      "sudo curl -L https://github.com/docker/compose/releases/download/1.22.0-rc2/docker-compose-`uname -s`-`uname -m` -o /usr/local/bin/docker-compose",
      "sudo chmod +x /usr/local/bin/docker-compose",
      "sudo chkconfig docker on",
      "sudo service docker start",
      "git clone https://github.com/MIS-DO/DO2122-03",
      "sudo service docker start",
    ]
  }

    provisioner "remote-exec" {
    inline = [
      "chmod u+x ./DO2122-03/start.sh",
      "cd ./DO2122-03",
      "./start.sh"
    ]
  }
}
