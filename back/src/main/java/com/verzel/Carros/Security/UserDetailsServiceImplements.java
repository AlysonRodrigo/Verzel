package com.verzel.Carros.Security;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import com.verzel.Carros.Model.Usuario;
import com.verzel.Carros.Repository.RepositorioUsuario;

@Service
public class UserDetailsServiceImplements implements UserDetailsService {
	private @Autowired RepositorioUsuario repositorio;

	@Override
	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
		Optional<Usuario> objetoOptional = repositorio.findByEmail(username);
		
		if (objetoOptional.isPresent()) {
			return new UserDetailsImplements(objetoOptional.get());			
		} else {
			throw new UsernameNotFoundException(username + "Não existe!");
		}
	}

}
