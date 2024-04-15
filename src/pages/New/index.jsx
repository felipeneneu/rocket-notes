import { Header } from "../../components/Header"
import { Input } from "../../components/Input"
import { TextArea } from "../../components/TextArea"
import { NoteItem } from "../../components/NoteItem"
import { Section } from "../../components/Section"
import { Button } from "../../components/Button"


import { Container, Form } from "./styles"

export function New() {
    return (
        <Container>
            <Header />
            <main>
                <Form>
                    <header>
                        <h1>Criar Nota</h1>
                        <a href="/">voltar</a>

                    </header>
                    <Input placeholder="Titulo" />

                    <TextArea placeholder="Observações" />

                    <Section title="Links Uteis">
                        <NoteItem value="https://www.felipeneneu.com" />
                        <NoteItem isNew placeholder="Novo Link" />
                    </Section>

                    <Section title="Marcadores">
                        <div className="tags">
                            <NoteItem value="React" />
                            <NoteItem isNew placeholder="Nova Tag" />
                        </div>
                    </Section>
                    <Button title="Salvar" />
                </Form>
            </main>
        </Container>
    )
}