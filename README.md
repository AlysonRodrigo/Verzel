# *Verzel*

O projeto foi desenvolvido com o Java 11 na parte do BackEnd, usando 3 models (usuario, carros e login). Foi ultilizado uma camada repositório para usuario e carros. Também controller de usuario e carro, e uma service de usuario para a criação e edição, por fim security com basic64 para ter uma segurança no backend.

Como frameWork no Backend foi ultilizado o SpringBoot rodando na porta 8080, e no FrontEnd foi ultilizado Angular com Bootstrap. 

Para banco de dados relacional foi ultilizado o MySQL, abaixo o codigo do banco; 

```java
spring.jpa.hibernate.ddl-auto=update
spring.datasource.url=jdbc:mysql://${MYSQL_HOST:localhost}:3306/db_catalogo?createDatabaseIfNotExist=true
spring.datasource.username=root
spring.datasource.password=19283746
spring.jpa.show-sql: true
```

Todos os testes do BackEnd foram feitos no Postman para ter certificar de que cada endpoint esteja funcionando  corretamente antes de consumir no FontEnd.

No FrontEnd para diferenciar um usuario normal de um usuario Administrador, foi colocado um código no momento de fazer o cadastro que sem ele não é possivel criar um usuario Administrador, o codigo é: aaa 
Em cado de dúvidas pode ser visto na pasta cadastrar.ts 
```ts
if (this.user.tipo == "Administrador" && this.code == "aaa") {
          this.authService.cadastrar(this.user).subscribe((resp: Usuario) => {
            this.user = resp
            this.router.navigate(['/inicio'])
            alert("Usuário cadastrado com sucesso!")
          }
```

Um usuario normal, só conseguirá ver os carros já cadastrados, por outro lado um usuario administrador pode adicionar novos carros, editar (foto, valor, marca e modelo)e tambem pode apagar um carro da lista.



