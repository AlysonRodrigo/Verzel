# *Verzel*
O projeto foi feito com o Java 11 no BackEnd usando 3 model (usuario, carros e login), foi ultilizado tepositorio de usuario e carros, controller de usuario e carro,service de usuario para a criação e edição e security para ter uma segurança no backend

FremWork foi ultilizado o SpringBoot  rodando na porta 8080

O banco de dados foi ultilizado o MySQL 

Todos os testes do BackEnd foram feitos no postman para ter a certeza de que cada endpoint esteja funcionando antes de começar a fazer a integração com o FontEnd

Ja o FrontEnd foi ultilizadfo Angular 5 e ultilizado de FremWork o BootsTrap 

No FrontEnd para adiferenciar um usuario normal para um usuario Administrador foi colocado um codigo no momento de fazer o cadastro que sem ele não é possivel criar um usuario Administrado, o codigo é aaa 
Em cado de duvidas pode ser visto na pasta cadastrar.ts 

Um usuario normal so consegue ver os Carros ja cadastrados 
Ja um Usuario administrador pode adicionar novos carros, editar (foto, valor,marca e modelo)e tambem pode apagar um usuario da lista 
