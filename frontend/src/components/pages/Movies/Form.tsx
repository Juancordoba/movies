import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
//border: 1px solid red;
    width: 1000px;       
    margin: 0 auto;
    margin-top: 2rem;
    @media (min-device-width : 1600) {
        width: 100%;       
        margin: 0 auto;
    }
`;

export default function Form() {
    return (
        <Wrapper>
            <form>

                <div className="form-group row">
                    <label className="col-sm-2 col-form-label">Título</label>
                    <div className="col-sm-10">
                        <input type="text" className="form-control" id="title" name="title" placeholder="" />
                    </div>
                </div>
                <br />
                <div className="form-group row">
                    <label className="col-sm-2 col-form-label">Descripción</label>
                    <div className="col-sm-10">
                        <textarea className="form-control" id="description" name="description" placeholder="" ></textarea>
                    </div>
                </div>
                <br />
                <div className="form-group row">
                    <label className="col-sm-2 col-form-label">Año</label>
                    <div className="col-sm-10">
                        <input type="number" className="form-control" id="year" name="year" />
                    </div>
                </div>
            </form>
        </Wrapper>

    )
}
