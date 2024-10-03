import Link from 'next/link';
import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';
import { Container, Div2, Div3, NavLink, SocialIcons } from './HeaderStyles';

const Header = () => (
  <Container>
    <Div2>
      <li>
        <Link href="#projects" legacyBehavior>
          <NavLink>Projetos</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#sobremim">
          <NavLink>Sobre mim</NavLink>
        </Link>
      </li>
      <li>
        <Link href="https://linktr.ee/loefujii" target='blank'>
          <NavLink>Redes sociais</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#contato">
          <NavLink>Contato</NavLink>
        </Link>
        </li>
    </Div2>
    <Div3>
      <SocialIcons href="https://github.com/fujita022" target='blank'>
        <AiFillGithub size="3rem" />
      </SocialIcons>
      <SocialIcons href="https://br.linkedin.com/in/erick-fujita" target='blank'>
        <AiFillLinkedin size="3rem" />
      </SocialIcons>
      <SocialIcons href="https://www.instagram.com/loefujii" target='blank'>
        <AiFillInstagram size="3rem" />
      </SocialIcons>
    </Div3>
  </Container>
);

export default Header;
