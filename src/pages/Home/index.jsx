import './styles.css';
import React, { useState, useEffect } from 'react';

import { Card } from '../../components/cards';

export function Home() {
  const [studentName, setStudentName] = useState('');
  const [students, setStudents] = useState([]);
  const [user, setUser] = useState({ name: ''})

  function handleAddStudent() {
    const newStudent = {
      name: studentName,
      time: new Date().toLocaleDateString("pt-br", {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
      })
    };
    //guardando o resultado para nao substituir (Estado Anterior)
    //Mostrar o conteudo do Estado anterior (ps) + o Novo registro (ns)
    setStudents(prevState => [...prevState, newStudent]); //... = spread operator (pegar o conteudo e despejar dentro)
  }

  useEffect(() => {
    async function fetchData() {
      const data = await response.json()
      setUser({
        name: data.name,
      });
    }
  }, []);
  //se o array final do effect estiver vazio significa que quero rodar 1x }, []);)
  //asyn com Effect só funciona dentro ou fora, nao da para usar com o nome
  //executado assim que a interface é rendernizado (automatico)
  //aqui ficara todas as açoes ou aquilo que quero executar
  //usando API padrao do JS chamando a api do meu github, usando THEN pq é uma promise
  //pegando a resposta do promise que é devolvida, passando ela para json

  return (
    //<>Fragment</>Pode usar uma div dentro tb,tem q ser alocado tudo em 1 fragmento
    <div className='container'>
      <section className='container-save'>
        <table className='list'>
          <tr>
            <td> {} </td>
          </tr>
        </table>
      </section>

      <section className='container-register'>
        <div className=''>
          <h1> Tabela de Registro </h1>
          <div>
            <strong> {user.name} </strong>
          </div>
        </div>
        <input
          type="text"
          placeholder="Digite o nome do produto..."
          onChange={e => setStudentName(e.target.value)}
        />
        <button type="button" onClick={handleAddStudent}>Adicionar</button>
        {
          students.map(student => (
            <Card
              //componentes gerado apartir de uma estrutura de repeticao tem que utilizar o KEY, normalmente é usado o ID dentro..algo que nao de error por ser igual
              key={student.time}
              name={student.name}
              time={student.time}
            />))
        }
        <button type="button" onClick={''}>Guardar</button>
      </section>

    </div>
  )
}

/* Se não tiver o export antes da function
tem que usar isso no final da pag 'export default Home'
agora, se usar o export (como neste caso) no seu
arquivo main.jsx vc tem que adicionar chaves ao nome
do arquivo { Home } */
