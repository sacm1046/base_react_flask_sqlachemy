import React from 'react'
import { useState } from 'react'

const Form = () => {
    const [name, setName] = useState('')
    const [lastname, setLastname] = useState('')
    const send = e => {
        e.prenventDefault()
        if (!name.trim()) {
            alert('vacio')
            return
        }
        if (!lastname.trim()) {
            alert('vacio')
            return
        }
        e.target.reset()
        setName('')
        setLastname('')
    }

    return (
        <div className="py-4 bg-dark text-white mb-5">
            <h1 className="text-center">Formulario</h1>
            <div className="row m-0 mt-3">

                <div className="col-md-4"></div>
                <div className="col-md-4">
                    <form onSubmit={e => send(e)}>
                        <div className="form-group">
                            <label htmlFor="name">Nombre</label>
                            <input type="text" className="form-control" id="name" onChange={e => setName(e.target.value)} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="lastname">Apellido</label>
                            <input type="text" className="form-control" id="lastname" onChange={e => setLastname(e.target.value)} />
                        </div>
                        <button className="btn btn-block btn-primary">Enviar</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Form
