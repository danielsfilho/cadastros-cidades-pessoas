import { useEffect, useRef, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { FormHandles } from '@unform/core'
import { Form } from '@unform/web'

import { PessoasService } from '../../shared/services/api/pessoas/PessoasService'
import { FerramentasDeDetalhes } from '../../shared/components'
import { LayoutBaseDePagina } from '../../shared/layouts'
import { VTextField } from '../../shared/forms'

interface IFormData {
  email: string,
  cidadeId: string,
  nomeCompleto: string,
}

export const DetalheDePessoas: React.FC = () => {
  const { id = 'nova' } = useParams<'id'>()
  const navigate = useNavigate()

  const formRef = useRef<FormHandles>(null)

  const [isLoading, setIsLoading] = useState(false)
  const [nome, setNome] = useState('')

  
  useEffect(() => {
    if(id !== 'nova') {
      setIsLoading(true)

      PessoasService.getById(Number(id))
        .then((result) => {
          setIsLoading(false)

          if(result instanceof Error){
            alert(result.message)
            navigate('/pessoas')
          }else {
            setNome(result.nomeCompleto)
            console.log(result)
          }
        })
    }
  }, [id])

  const handleSave = (dados: IFormData) => {
    console.log(dados)
  }

  const handleDelete = (id: number) => {
    if(confirm('Realmente deseja apagar?')) {
      PessoasService.deleteById(id)
        .then(result => {
          if(result instanceof Error) {
            alert(result.message)
          }else {
            alert('Registro apagado com sucesso!')
            navigate('/pessoas')
          }
        })
    }

  }


  return(
    <LayoutBaseDePagina
      titulo={id === 'nova' ? 'Nova pessoa' : nome}
      barraDeFerramentas={
        <FerramentasDeDetalhes
          textoBotaoNovo='Nova'
          mostrarBotaoApagar={id !== 'nova'}
          mostrarBotaoNovo={id !== 'nova'}
          mostrarBotaoSalvarEVoltar

          aoClicarEmVoltar={() => {navigate('/pessoas')}}
          aoClicarEmApagar={() => handleDelete(Number(id))}
          aoClicarEmSalvar={() => formRef.current?.submitForm()}
          aoClicarEmNovo={() => {navigate('/pessoas/detalhe/nova')}}
          aoClicarEmSalvarEVoltar={() => formRef.current?.submitForm()}
        />
      }
    >
      <Form ref={formRef} onSubmit={handleSave}>

        <VTextField name="nomeCompleto"/>
        <VTextField name="email"/>
        <VTextField name="cidadeId"/>

      </Form>
    </LayoutBaseDePagina>
  )
}