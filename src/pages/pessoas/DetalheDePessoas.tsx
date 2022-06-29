import { useNavigate, useParams } from 'react-router-dom'

import { FerramentasDeDetalhes } from '../../shared/components'
import { LayoutBaseDePagina } from '../../shared/layouts'


export const DetalheDePessoas: React.FC = () => {
  const { id = 'nova' } = useParams<'id'>()
  const navigate = useNavigate()

  const handleSave = () => {
    console.log('save')
  }

  const handleDelete = () => {
    console.log('save')
  }


  return(
    <LayoutBaseDePagina
      titulo="Detalhe de pessoa"
      barraDeFerramentas={
        <FerramentasDeDetalhes
          textoBotaoNovo='Nova'
          mostrarBotaoApagar={id !== 'nova'}
          mostrarBotaoNovo={id !== 'nova'}
          mostrarBotaoSalvarEVoltar

          aoClicarEmNovo={() => {navigate('/pessoas/detalhe/nova')}}
          aoClicarEmVoltar={() => {navigate('/pessoas')}}
          aoClicarEmSalvarEVoltar={handleSave}
          aoClicarEmApagar={handleDelete}
          aoClicarEmSalvar={handleSave}
        />
      }
    >
      <p>DetalheDePessoas{id}</p>
    </LayoutBaseDePagina>
  )
}