import { Button, Container } from "@mui/material"
import { Badge } from "./style/style"
import { LinkBtn, SecondButton } from "./components/ui/buttons/buttons"
import { SearchInput } from "./components/ui/inputs/input"
import { Li } from "./components/ui/li/li"
import Typography from "@mui/material/Typography"

function App() {

  return (
    <Container>
      <Button variant="contained">Click</Button>
      <Badge>Новинка</Badge>
      <LinkBtn>Все новинки</LinkBtn>
      <SearchInput />
      <SecondButton variant="contained">Смотреть все</SecondButton>
      <ul>
        <Li>
          <Typography variant="h2">Материал</Typography>
          <Typography variant="body 1">Бамбук</Typography>
        </Li>

        <Li>
          <Typography variant="h2">Толщина</Typography>
          <Typography variant="body 1">6 мм</Typography>
        </Li>

        <Li>
          <Typography variant="h2">Вес</Typography>
          <Typography variant="body 1">
            1.6 кг/м² (+/- 1%)
          </Typography>
        </Li>

        <Li>
          <Typography variant="h2">Плотность</Typography>
          <Typography variant="body 1">
            504 000 узлов/м²
          </Typography>
        </Li>

        <Li>
          <Typography variant="h2">Производитель</Typography>
          <Typography variant="body 1">Yusuf Hali</Typography>
        </Li>

        <Li>
          <Typography variant="h2">Страна</Typography>
          <Typography variant="body 1">Турция</Typography>
        </Li>
      </ul>

    </Container>
  )
}

export default App
