<?php

namespace Database\Seeders;

use App\Models\Client;
use App\Models\User;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        $data = [
            [
                'name' => 'Wesley Barbosa',
                'cpf' => '37865865800',
                'birthday' => "1990-01-01",
                'gender' => 'M',
                'state' => "SP",
                "city" => 'Guarulhos',
                'address' => 'Rua teste'
            ],
            [
                'name' => 'Maria Silva',
                'cpf' => '12345678901',
                'birthday' => "1985-05-12",
                'gender' => 'F',
                'state' => "RJ",
                "city" => 'Rio de Janeiro',
                'address' => 'Avenida Principal'
            ],
            [
                'name' => 'João Santos',
                'cpf' => '98765432109',
                'birthday' => "1978-09-20",
                'gender' => 'M',
                'state' => "MG",
                "city" => 'Belo Horizonte',
                'address' => 'Praça Central'
            ],
            [
                'name' => 'Ana Oliveira',
                'cpf' => '45612378905',
                'birthday' => "1982-03-30",
                'gender' => 'F',
                'state' => "RS",
                "city" => 'Porto Alegre',
                'address' => 'Avenida Principal'
            ],
            [
                'name' => 'Carlos Ferreira',
                'cpf' => '78945612303',
                'birthday' => "1975-07-15",
                'gender' => 'M',
                'state' => "SP",
                "city" => 'São Paulo',
                'address' => 'Rua dos Artistas'
            ],
            [
                'name' => 'Juliana Oliveira',
                'cpf' => '65498732106',
                'birthday' => "1988-12-05",
                'gender' => 'F',
                'state' => "BA",
                "city" => 'Salvador',
                'address' => 'Avenida Central'
            ],
            [
                'name' => 'Luiz Santos',
                'cpf' => '32165498700',
                'birthday' => "1973-04-25",
                'gender' => 'M',
                'state' => "RS",
                "city" => 'Caxias do Sul',
                'address' => 'Rua das Flores'
            ],
            [
                'name' => 'Amanda Silva',
                'cpf' => '98712345602',
                'birthday' => "1995-10-18",
                'gender' => 'F',
                'state' => "PR",
                "city" => 'Curitiba',
                'address' => 'Rua das Árvores'
            ],
            [
                'name' => 'Fernanda Oliveira',
                'cpf' => '12378945605',
                'birthday' => "1992-08-20",
                'gender' => 'F',
                'state' => "RJ",
                "city" => 'Niterói',
                'address' => 'Rua das Palmeiras'
            ],
            [
                'name' => 'Ricardo Santos',
                'cpf' => '65432198704',
                'birthday' => "1980-03-15",
                'gender' => 'M',
                'state' => "SP",
                "city" => 'São Bernardo do Campo',
                'address' => 'Avenida dos Bandeirantes'
            ],
            [
                'name' => 'Aline Silva',
                'cpf' => '98765432107',
                'birthday' => "1993-12-10",
                'gender' => 'F',
                'state' => "RS",
                "city" => 'Pelotas',
                'address' => 'Rua das Flores'
            ],
            [
                'name' => 'Pedro Lima',
                'cpf' => '45698712306',
                'birthday' => "1987-05-25",
                'gender' => 'M',
                'state' => "MG",
                "city" => 'Uberlândia',
                'address' => 'Rua José Alves'
            ],
            [
                'name' => 'Camila Oliveira',
                'cpf' => '78965412308',
                'birthday' => "1990-11-05",
                'gender' => 'F',
                'state' => "SP",
                "city" => 'Campinas',
                'address' => 'Avenida Central'
            ],
            [
                'name' => 'Lucas Santos',
                'cpf' => '32198765402',
                'birthday' => "1976-09-28",
                'gender' => 'M',
                'state' => "RJ",
                "city" => 'Nova Iguaçu',
                'address' => 'Rua da Paz'
            ],
            [
                'name' => 'Patrícia Ferreira',
                'cpf' => '98765432105',
                'birthday' => "1984-02-17",
                'gender' => 'F',
                'state' => "BA",
                "city" => 'Feira de Santana',
                'address' => 'Avenida da Liberdade'
            ],
            [
                'name' => 'Gustavo Oliveira',
                'cpf' => '45632198703',
                'birthday' => "1979-07-30",
                'gender' => 'M',
                'state' => "RS",
                "city" => 'Porto Alegre',
                'address' => 'Rua das Flores'
            ],
            [
                'name' => 'Fernanda Lima',
                'cpf' => '98765432106',
                'birthday' => "1991-04-12",
                'gender' => 'F',
                'state' => "PR",
                "city" => 'Curitiba',
                'address' => 'Rua da Paz'
            ],
            [
                'name' => 'Thiago Silva',
                'cpf' => '12345678900',
                'birthday' => "1986-10-03",
                'gender' => 'M',
                'state' => "SP",
                "city" => 'São Paulo',
                'address' => 'Avenida Paulista'
            ],
            [
                'name' => 'Paula Santos',
                'cpf' => '65498732101',
                'birthday' => "1983-03-22",
                'gender' => 'F',
                'state' => "RS",
                "city" => 'Porto Alegre',
                'address' => 'Rua das Palmeiras'
            ],
            [
                'name' => 'Luciano Oliveira',
                'cpf' => '32145698700',
                'birthday' => "1974-07-18",
                'gender' => 'M',
                'state' => "MG",
                "city" => 'Belo Horizonte',
                'address' => 'Avenida Principal'
            ],
            [
                'name' => 'Carla Silva',
                'cpf' => '98732145602',
                'birthday' => "1989-12-09",
                'gender' => 'F',
                'state' => "SP",
                "city" => 'São Paulo',
                'address' => 'Rua dos Bandeirantes'
            ],
            [
                'name' => 'Rodrigo Santos',
                'cpf' => '65412378905',
                'birthday' => "1981-04-26",
                'gender' => 'M',
                'state' => "RJ",
                "city" => 'Rio de Janeiro',
                'address' => 'Avenida Central'
            ],
            [
                'name' => 'Mariana Oliveira',
                'cpf' => '12365498703',
                'birthday' => "1987-08-14",
                'gender' => 'F',
                'state' => "BA",
                "city" => 'Salvador',
                'address' => 'Rua dos Artistas'
            ],
            [
                'name' => 'Gustavo Silva',
                'cpf' => '78932165407',
                'birthday' => "1994-01-07",
                'gender' => 'M',
                'state' => "RS",
                "city" => 'Porto Alegre',
                'address' => 'Avenida das Flores'
            ],
            [
                'name' => 'Patrícia Lima',
                'cpf' => '65478932102',
                'birthday' => "1977-05-29",
                'gender' => 'F',
                'state' => "PR",
                "city" => 'Curitiba',
                'address' => 'Rua da Liberdade'
            ],
            [
                'name' => 'Rafael Oliveira',
                'cpf' => '98765412308',
                'birthday' => "1990-10-23",
                'gender' => 'M',
                'state' => "SP",
                "city" => 'Campinas',
                'address' => 'Rua dos Sonhos'
            ],
            [
                'name' => 'Vanessa Santos',
                'cpf' => '32198745601',
                'birthday' => "1985-03-17",
                'gender' => 'F',
                'state' => "RJ",
                "city" => 'Niterói',
                'address' => 'Avenida das Palmeiras'
            ],
            [
                'name' => 'Diego Silva',
                'cpf' => '98765412309',
                'birthday' => "1979-09-02",
                'gender' => 'M',
                'state' => "MG",
                "city" => 'Uberlândia',
                'address' => 'Rua das Flores'
            ],
            [
                'name' => 'Ana Carolina',
                'cpf' => '45678932106',
                'birthday' => "1984-06-19",
                'gender' => 'F',
                'state' => "RS",
                "city" => 'Porto Alegre',
                'address' => 'Rua das Palmeiras'
            ],
            [
                'name' => 'Fábio Oliveira',
                'cpf' => '32198765409',
                'birthday' => "1991-11-30",
                'gender' => 'M',
                'state' => "BA",
                "city" => 'Salvador',
                'address' => 'Avenida Central'
            ],
            [
                'name' => 'Jéssica Silva',
                'cpf' => '78945632104',
                'birthday' => "1976-02-03",
                'gender' => 'F',
                'state' => "PR",
                "city" => 'Curitiba',
                'address' => 'Rua dos Bandeirantes'
            ],
            [
                'name' => 'Ricardo Lima',
                'cpf' => '65432198705',
                'birthday' => "1993-07-28",
                'gender' => 'M',
                'state' => "SP",
                "city" => 'São Paulo',
                'address' => 'Rua da Liberdade'
            ],
            [
                'name' => 'Mariana Santos',
                'cpf' => '12378965402',
                'birthday' => "1978-04-15",
                'gender' => 'F',
                'state' => "RJ",
                "city" => 'Rio de Janeiro',
                'address' => 'Avenida Principal'
            ],
            [
                'name' => 'Lucas Oliveira',
                'cpf' => '98765432102',
                'birthday' => "1982-12-10",
                'gender' => 'M',
                'state' => "MG",
                "city" => 'Belo Horizonte',
                'address' => 'Rua dos Artistas'
            ],
            [
                'name' => 'Fernanda Santos',
                'cpf' => '32165498705',
                'birthday' => "1994-08-03",
                'gender' => 'F',
                'state' => "RS",
                "city" => 'Porto Alegre',
                'address' => 'Rua da Paz'
            ],
            [
                'name' => 'Thiago Oliveira',
                'cpf' => '98731165401',
                'birthday' => "1975-03-22",
                'gender' => 'M',
                'state' => "PR",
                "city" => 'Curitiba',
                'address' => 'Avenida da Liberdade'
            ],
            [
                'name' => 'Carolina Silva',
                'cpf' => '45698732100',
                'birthday' => "1990-11-15",
                'gender' => 'F',
                'state' => "SP",
                "city" => 'São Paulo',
                'address' => 'Rua das Flores'
            ],
            [
                'name' => 'Marcos Oliveira',
                'cpf' => '78965498701',
                'birthday' => "1981-07-30",
                'gender' => 'M',
                'state' => "RJ",
                "city" => 'Rio de Janeiro',
                'address' => 'Avenida Central'
            ],
            [
                'name' => 'Isabela Santos',
                'cpf' => '32145698708',
                'birthday' => "1986-10-18",
                'gender' => 'F',
                'state' => "MG",
                "city" => 'Belo Horizonte',
                'address' => 'Rua das Palmeiras'
            ],
            [
                'name' => 'Leonardo Oliveira',
                'cpf' => '98732145603',
                'birthday' => "1992-05-25",
                'gender' => 'M',
                'state' => "RS",
                "city" => 'Porto Alegre',
                'address' => 'Avenida dos Bandeirantes'
            ],
            [
                'name' => 'Aline Santos',
                'cpf' => '45678912309',
                'birthday' => "1973-09-28",
                'gender' => 'F',
                'state' => "PR",
                "city" => 'Curitiba',
                'address' => 'Rua da Paz'
            ],
            [
                'name' => 'Rodrigo Oliveira',
                'cpf' => '98765432103',
                'birthday' => "1989-04-12",
                'gender' => 'M',
                'state' => "SP",
                "city" => 'São Paulo',
                'address' => 'Rua dos Artistas'
            ],
            [
                'name' => 'Patrícia Santos',
                'cpf' => '32198765406',
                'birthday' => "1984-01-05",
                'gender' => 'F',
                'state' => "RJ",
                "city" => 'Rio de Janeiro',
                'address' => 'Avenida Principal'
            ],
            [
                'name' => 'Guilherme Oliveira',
                'cpf' => '98745632101',
                'birthday' => "1977-06-19",
                'gender' => 'M',
                'state' => "MG",
                "city" => 'Belo Horizonte',
                'address' => 'Rua dos Bandeirantes'
            ],
            [
                'name' => 'Carla Santos',
                'cpf' => '65432198702',
                'birthday' => "1991-02-17",
                'gender' => 'F',
                'state' => "RS",
                "city" => 'Porto Alegre',
                'address' => 'Avenida da Liberdade'
            ],
            [
                'name' => 'Vinícius Lima',
                'cpf' => '98765412305',
                'birthday' => "1980-07-30",
                'gender' => 'M',
                'state' => "PR",
                "city" => 'Curitiba',
                'address' => 'Rua das Flores'
            ],
            [
                'name' => 'Gabriela Oliveira',
                'cpf' => '12345698702',
                'birthday' => "1976-04-26",
                'gender' => 'F',
                'state' => "SP",
                "city" => 'São Paulo',
                'address' => 'Rua da Paz'
            ],
            [
                'name' => 'Bruno Santos',
                'cpf' => '98765478901',
                'birthday' => "1993-08-14",
                'gender' => 'M',
                'state' => "RJ",
                "city" => 'Rio de Janeiro',
                'address' => 'Avenida Central'
            ],
            [
                'name' => 'Bianca Oliveira',
                'cpf' => '65432198708',
                'birthday' => "1978-12-10",
                'gender' => 'F',
                'state' => "MG",
                "city" => 'Belo Horizonte',
                'address' => 'Rua dos Artistas'
            ],
            [
                'name' => 'Daniel Silva',
                'cpf' => '98765432104',
                'birthday' => "1990-03-22",
                'gender' => 'M',
                'state' => "RS",
                "city" => 'Porto Alegre',
                'address' => 'Avenida das Palmeiras'
            ],
            [
                'name' => 'Mariana Lima',
                'cpf' => '32191265409',
                'birthday' => "1975-08-18",
                'gender' => 'F',
                'state' => "PR",
                "city" => 'Curitiba',
                'address' => 'Rua dos Bandeirantes'
            ],
            [
                'name' => 'Renato Oliveira',
                'cpf' => '98745632102',
                'birthday' => "1991-11-30",
                'gender' => 'M',
                'state' => "SP",
                "city" => 'São Paulo',
                'address' => 'Avenida da Liberdade'
            ],
            [
                'name' => 'Camila Santos',
                'cpf' => '65412398705',
                'birthday' => "1983-04-15",
                'gender' => 'F',
                'state' => "RJ",
                "city" => 'Rio de Janeiro',
                'address' => 'Rua das Flores'
            ],
            [
                'name' => 'Rafaela Oliveira',
                'cpf' => '98732145608',
                'birthday' => "1995-08-03",
                'gender' => 'F',
                'state' => "MG",
                "city" => 'Belo Horizonte',
                'address' => 'Rua da Paz'
            ],
            [
                'name' => 'Marcos Santos',
                'cpf' => '32165498701',
                'birthday' => "1979-02-22",
                'gender' => 'M',
                'state' => "RS",
                "city" => 'Porto Alegre',
                'address' => 'Avenida Principal'
            ],
            [
                'name' => 'Gabriela Lima',
                'cpf' => '98745632106',
                'birthday' => "1987-07-30",
                'gender' => 'F',
                'state' => "PR",
                "city" => 'Curitiba',
                'address' => 'Rua dos Artistas'
            ],
            [
                'name' => 'Vitor Oliveira',
                'cpf' => '65498732107',
                'birthday' => "1994-11-25",
                'gender' => 'M',
                'state' => "SP",
                "city" => 'São Paulo',
                'address' => 'Avenida das Palmeiras'
            ],
            [
                'name' => 'Carolina Santos',
                'cpf' => '12165498702',
                'birthday' => "1974-05-15",
                'gender' => 'F',
                'state' => "RJ",
                "city" => 'Rio de Janeiro',
                'address' => 'Rua dos Bandeirantes'
            ],
            [
                'name' => 'Roberto Oliveira',
                'cpf' => '98732165405',
                'birthday' => "1989-10-18",
                'gender' => 'M',
                'state' => "MG",
                "city" => 'Belo Horizonte',
                'address' => 'Avenida da Liberdade'
            ],
            [
                'name' => 'Luana Santos',
                'cpf' => '65498732108',
                'birthday' => "1976-03-22",
                'gender' => 'F',
                'state' => "RS",
                "city" => 'Porto Alegre',
                'address' => 'Rua da Paz'
            ],
            [
                'name' => 'Rafael Oliveira',
                'cpf' => '98765232107',
                'birthday' => "1993-01-30",
                'gender' => 'M',
                'state' => "PR",
                "city" => 'Curitiba',
                'address' => 'Rua das Flores'
            ],
            [
                'name' => 'Larissa Santos',
                'cpf' => '32165498702',
                'birthday' => "1980-06-18",
                'gender' => 'F',
                'state' => "SP",
                "city" => 'São Paulo',
                'address' => 'Avenida Paulista'
            ],
            [
                'name' => 'Ricardo Oliveira',
                'cpf' => '98732165403',
                'birthday' => "1973-11-15",
                'gender' => 'M',
                'state' => "RJ",
                "city" => 'Rio de Janeiro',
                'address' => 'Rua da Paz'
            ],
            [
                'name' => 'Marina Silva',
                'cpf' => '65491732106',
                'birthday' => "1990-04-22",
                'gender' => 'F',
                'state' => "MG",
                "city" => 'Belo Horizonte',
                'address' => 'Avenida Principal'
            ],
            [
                'name' => 'Carlos Santos',
                'cpf' => '32145698709',
                'birthday' => "1988-09-30",
                'gender' => 'M',
                'state' => "RS",
                "city" => 'Porto Alegre',
                'address' => 'Rua das Palmeiras'
            ],
            [
                'name' => 'Tatiane Oliveira',
                'cpf' => '98765432100',
                'birthday' => "1977-12-28",
                'gender' => 'F',
                'state' => "PR",
                "city" => 'Curitiba',
                'address' => 'Rua dos Bandeirantes'
            ],
            [
                'name' => 'Pedro Santos',
                'cpf' => '32198765403',
                'birthday' => "1995-02-10",
                'gender' => 'M',
                'state' => "SP",
                "city" => 'São Paulo',
                'address' => 'Avenida da Liberdade'
            ],
            [
                'name' => 'Ana Oliveira',
                'cpf' => '98745632104',
                'birthday' => "1972-07-22",
                'gender' => 'F',
                'state' => "RJ",
                "city" => 'Rio de Janeiro',
                'address' => 'Rua da Paz'
            ],
            [
                'name' => 'Diego Santos',
                'cpf' => '65432198707',
                'birthday' => "1984-10-18",
                'gender' => 'M',
                'state' => "MG",
                "city" => 'Belo Horizonte',
                'address' => 'Avenida Principal'
            ],
            [
                'name' => 'Larissa Oliveira',
                'cpf' => '28765432105',
                'birthday' => "1981-05-30",
                'gender' => 'F',
                'state' => "RS",
                "city" => 'Porto Alegre',
                'address' => 'Rua dos Artistas'
            ],
            [
                'name' => 'Bruno Silva',
                'cpf' => '32165498708',
                'birthday' => "1979-11-22",
                'gender' => 'M',
                'state' => "PR",
                "city" => 'Curitiba',
                'address' => 'Avenida das Palmeiras'
            ],
            [
                'name' => 'Jéssica Oliveira',
                'cpf' => '98732165401',
                'birthday' => "1992-03-15",
                'gender' => 'F',
                'state' => "SP",
                "city" => 'São Paulo',
                'address' => 'Rua dos Bandeirantes'
            ],
            [
                'name' => 'Renato Santos',
                'cpf' => '65498732104',
                'birthday' => "1987-08-20",
                'gender' => 'M',
                'state' => "RJ",
                "city" => 'Rio de Janeiro',
                'address' => 'Avenida da Liberdade'
            ],
            [
                'name' => 'Amanda Oliveira',
                'cpf' => '32165498707',
                'birthday' => "1983-01-10",
                'gender' => 'F',
                'state' => "MG",
                "city" => 'Belo Horizonte',
                'address' => 'Rua da Paz'
            ],
            [
                'name' => 'Rafaela Santos',
                'cpf' => '98732165400',
                'birthday' => "1976-04-22",
                'gender' => 'F',
                'state' => "RS",
                "city" => 'Porto Alegre',
                'address' => 'Avenida Principal'
            ],
            [
                'name' => 'Lucas Oliveira',
                'cpf' => '65498732103',
                'birthday' => "1990-10-18",
                'gender' => 'M',
                'state' => "PR",
                "city" => 'Curitiba',
                'address' => 'Rua dos Artistas'
            ],
            [
                'name' => 'Isabela Silva',
                'cpf' => '32165498706',
                'birthday' => "1984-05-30",
                'gender' => 'F',
                'state' => "SP",
                "city" => 'São Paulo',
                'address' => 'Avenida Paulista'
            ],
            [
                'name' => 'Diego Oliveira',
                'cpf' => '98732165409',
                'birthday' => "1977-08-20",
                'gender' => 'M',
                'state' => "RJ",
                "city" => 'Rio de Janeiro',
                'address' => 'Rua da Paz'
            ],
            [
                'name' => 'Aline Santos',
                'cpf' => '65498732102',
                'birthday' => "1991-01-10",
                'gender' => 'F',
                'state' => "MG",
                "city" => 'Belo Horizonte',
                'address' => 'Avenida Principal'
            ],
            [
                'name' => 'Bruno Oliveira',
                'cpf' => '32162498705',
                'birthday' => "1985-04-22",
                'gender' => 'M',
                'state' => "RS",
                "city" => 'Porto Alegre',
                'address' => 'Rua dos Bandeirantes'
            ],
            [
                'name' => 'Juliana Silva',
                'cpf' => '98732165408',
                'birthday' => "1988-11-30",
                'gender' => 'F',
                'state' => "PR",
                "city" => 'Curitiba',
                'address' => 'Avenida das Palmeiras'
            ],
            [
                'name' => 'Thiago Santos',
                'cpf' => '65498132101',
                'birthday' => "1980-06-18",
                'gender' => 'M',
                'state' => "SP",
                "city" => 'São Paulo',
                'address' => 'Rua da Liberdade'
            ],
            [
                'name' => 'Carla Oliveira',
                'cpf' => '32165498704',
                'birthday' => "1973-09-22",
                'gender' => 'F',
                'state' => "RJ",
                "city" => 'Rio de Janeiro',
                'address' => 'Avenida dos Artistas'
            ],
            [
                'name' => 'Gustavo Silva',
                'cpf' => '98732165407',
                'birthday' => "1994-02-10",
                'gender' => 'M',
                'state' => "MG",
                "city" => 'Belo Horizonte',
                'address' => 'Rua das Flores'
            ],
            [
                'name' => 'Amanda Santos',
                'cpf' => '65498732100',
                'birthday' => "1977-07-30",
                'gender' => 'F',
                'state' => "RS",
                "city" => 'Porto Alegre',
                'address' => 'Avenida Principal'
            ],
            [
                'name' => 'Leonardo Oliveira',
                'cpf' => '98762432103',
                'birthday' => "1985-06-18",
                'gender' => 'M',
                'state' => "PR",
                "city" => 'Curitiba',
                'address' => 'Rua da Liberdade'
            ],
            [
                'name' => 'Bianca Santos',
                'cpf' => '82165498706',
                'birthday' => "1990-11-22",
                'gender' => 'F',
                'state' => "SP",
                "city" => 'São Paulo',
                'address' => 'Avenida Paulista'
            ],
            [
                'name' => 'Carlos Oliveira',
                'cpf' => '18732165409',
                'birthday' => "1979-03-30",
                'gender' => 'M',
                'state' => "RJ",
                "city" => 'Rio de Janeiro',
                'address' => 'Rua da Paz'
            ],
            [
                'name' => 'Mariana Silva',
                'cpf' => '32125498702',
                'birthday' => "1982-08-18",
                'gender' => 'F',
                'state' => "MG",
                "city" => 'Belo Horizonte',
                'address' => 'Avenida dos Bandeirantes'
            ],
            [
                'name' => 'Fernando Oliveira',
                'cpf' => '98722165405',
                'birthday' => "1995-01-10",
                'gender' => 'M',
                'state' => "RS",
                "city" => 'Porto Alegre',
                'address' => 'Rua das Palmeiras'
            ],
            [
                'name' => 'Aline Silva',
                'cpf' => '65498732109',
                'birthday' => "1974-04-22",
                'gender' => 'F',
                'state' => "PR",
                "city" => 'Curitiba',
                'address' => 'Avenida da Liberdade'
            ],
            [
                'name' => 'Rafael Oliveira',
                'cpf' => '32165498709',
                'birthday' => "1989-09-30",
                'gender' => 'M',
                'state' => "SP",
                "city" => 'São Paulo',
                'address' => 'Rua dos Artistas'
            ],
            [
                'name' => 'Larissa Santos',
                'cpf' => '98732165404',
                'birthday' => "1983-12-18",
                'gender' => 'F',
                'state' => "RJ",
                "city" => 'Rio de Janeiro',
                'address' => 'Avenida Central'
            ],
            [
                'name' => 'Vinícius Oliveira',
                'cpf' => '32165498766',
                'birthday' => "1992-05-10",
                'gender' => 'M',
                'state' => "MG",
                "city" => 'Belo Horizonte',
                'address' => 'Rua das Flores'
            ],
            [
                'name' => 'Carolina Santos',
                'cpf' => '18732165400',
                'birthday' => "1975-10-22",
                'gender' => 'F',
                'state' => "RS",
                "city" => 'Porto Alegre',
                'address' => 'Avenida Principal'
            ],
            [
                'name' => 'Roberto Silva',
                'cpf' => '32165498703',
                'birthday' => "1980-02-18",
                'gender' => 'M',
                'state' => "PR",
                "city" => 'Curitiba',
                'address' => 'Rua dos Bandeirantes'
            ],
            [
                'name' => 'Tatiane Oliveira',
                'cpf' => '98732165406',
                'birthday' => "1994-07-10",
                'gender' => 'F',
                'state' => "SP",
                "city" => 'São Paulo',
                'address' => 'Avenida da Liberdade'
            ]
        ];

        Client::insert($data);
    }
}
