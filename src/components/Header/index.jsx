import { RiShutDownLine } from "react-icons/ri"
import { Container, Profile, Logout } from "./styles";

export function Header() {
    return (
        <Container>
            <Profile>
                <img src="https://pm1.aminoapps.com/6573/2e76da94004a1ffb2fd3f92d4322be3a501f4312_hq.jpg"
                    alt="Foto de Usuario" />
                <div>
                    <span>Bem vindo</span>
                    <strong>Felipe Neneu</strong>
                </div>
            </Profile>

            <Logout>
                <RiShutDownLine />
            </Logout>


        </Container>
    )
}