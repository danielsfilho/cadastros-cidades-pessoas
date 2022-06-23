import {
  Box,
  Button,
  Divider,
  Icon,
  Paper,
  Skeleton,
  Theme,
  Typography,
  useMediaQuery,
  useTheme
} from '@mui/material'

import * as React from 'react'

interface IFerramentasDeDetalhesProps {
  textoBotaoNovo?: string,
  textoBotaoVoltar?: string,
  textoBotaoApagar?: string,
  textoBotaoSalvar?: string,
  textoBotaoSalvarEVoltar?: string,

  mostrarBotaoNovo?: boolean,
  mostrarBotaoVoltar?: boolean,
  mostrarBotaoApagar?: boolean,
  mostrarBotaoSalvar?: boolean,
  mostrarBotaoSalvarEVoltar?: boolean,

  mostrarBotaoNovoCarregando?: boolean,
  mostrarBotaoVoltarCarregando?: boolean,
  mostrarBotaoApagarCarregando?: boolean,
  mostrarBotaoSalvarCarregando?: boolean,
  mostrarBotaoSalvarEVoltarCarregando?: boolean,

  aoClicarEmNovo?: () => void,
  aoClicarEmVoltar?: () => void,
  aoClicarEmApagar?: () => void,
  aoClicarEmSalvar?: () => void,
  aoClicarEmSalvarEVoltar?: () => void,
}

export const FerramentasDeDetalhes: React.FC<IFerramentasDeDetalhesProps> = ({
  textoBotaoNovo = 'Novo',
  textoBotaoVoltar = 'Voltar',
  textoBotaoApagar = 'Apagar',
  textoBotaoSalvar = 'Salvar',
  textoBotaoSalvarEVoltar = 'Salvar e voltar',

  mostrarBotaoNovo = true,
  mostrarBotaoVoltar = true,
  mostrarBotaoApagar = true,
  mostrarBotaoSalvar = true,
  mostrarBotaoSalvarEVoltar = false,

  mostrarBotaoNovoCarregando = false,
  mostrarBotaoVoltarCarregando = false,
  mostrarBotaoApagarCarregando = false,
  mostrarBotaoSalvarCarregando = false,
  mostrarBotaoSalvarEVoltarCarregando = false,

  aoClicarEmNovo,
  aoClicarEmVoltar,
  aoClicarEmApagar,
  aoClicarEmSalvar,
  aoClicarEmSalvarEVoltar,
}) => {
  const smDown = useMediaQuery((theme: Theme) => theme.breakpoints.down('sm'))
  const mdDown = useMediaQuery((theme: Theme) => theme.breakpoints.down('md'))
  const theme = useTheme()

  return(
    <Box
      gap={1}
      marginX={1}
      padding={1}
      paddingX={2}
      display="flex"
      alignItems="center"
      height={theme.spacing(5)}
      component={Paper}
    >
      {(mostrarBotaoSalvar && !mostrarBotaoSalvarCarregando) && (
        <Button
          color="primary"
          disableElevation
          variant="contained"
          onClick={aoClicarEmSalvar}
          startIcon={<Icon>save</Icon>}
        >
          <Typography
            variant="button"
            whiteSpace="nowrap"
            textOverflow="ellipsis"
            overflow="hidden"
          >
            {textoBotaoSalvar}
          </Typography>
        </Button>
      )}
      

      {mostrarBotaoSalvarCarregando && (
        <Skeleton width={110} height={60} />
      )}

      {(mostrarBotaoSalvarEVoltar && !mostrarBotaoSalvarEVoltarCarregando && !smDown && !mdDown) &&(
        <Button
          color="primary"
          disableElevation
          variant="outlined"
          onClick={aoClicarEmSalvarEVoltar}
          startIcon={<Icon>save</Icon>}
        >
          <Typography
            variant="button"
            whiteSpace="nowrap"
            textOverflow="ellipsis"
            overflow="hidden"
          >
            {textoBotaoSalvarEVoltar}
          </Typography>
          
        </Button>
      )}

      {(mostrarBotaoSalvarEVoltarCarregando && !smDown && !mdDown) &&(
        <Skeleton width={178} height={60} />
      )}

      {(mostrarBotaoApagar && !mostrarBotaoApagarCarregando) &&(
        <Button
          color="primary"
          disableElevation
          variant="outlined"
          onClick={aoClicarEmApagar}
          startIcon={<Icon>delete</Icon>}
        >
          <Typography
            variant="button"
            whiteSpace="nowrap"
            textOverflow="ellipsis"
            overflow="hidden"
          >
            {textoBotaoApagar}
          </Typography>
          
        </Button>
      )}
      
      {mostrarBotaoApagarCarregando &&(
        <Skeleton width={112} height={60} />
      )}
      
      {(mostrarBotaoNovo && !mostrarBotaoNovoCarregando && !smDown) &&(
        <Button
          color="primary"
          disableElevation
          variant="outlined"
          onClick={aoClicarEmNovo}
          startIcon={<Icon>add</Icon>}
        >
          <Typography
            variant="button"
            whiteSpace="nowrap"
            textOverflow="ellipsis"
            overflow="hidden"
          >
            {textoBotaoNovo}
          </Typography>
        </Button>
      )}

      {(mostrarBotaoNovoCarregando && !smDown) &&(
        <Skeleton width={96} height={60} />
      )}

      {
        (
          mostrarBotaoVoltar &&
          (mostrarBotaoNovo || mostrarBotaoApagar || mostrarBotaoSalvar || mostrarBotaoSalvarEVoltarCarregando)
        ) && (
          <Divider variant="middle" orientation="vertical" />
        )
      }

      {(mostrarBotaoVoltar && !mostrarBotaoVoltarCarregando) &&(
        <Button
          color="primary"
          disableElevation
          variant="outlined"
          onClick={aoClicarEmVoltar}
          startIcon={<Icon>arrow_back</Icon>}
        >
          <Typography
            variant="button"
            whiteSpace="nowrap"
            textOverflow="ellipsis"
            overflow="hidden"
          >
            {textoBotaoVoltar}
          </Typography>
        </Button>
      )}

      {mostrarBotaoVoltarCarregando &&(
        <Skeleton width={109} height={60} />
      )}
      
    </Box>
  )
}