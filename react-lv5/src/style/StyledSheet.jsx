
import styled from 'styled-components'

export const FontH1 = styled.span`
    font-size: 18px;
    font-weight: 700;
    color:#FFB0CF;
`
export const FontH2 = styled.span`
    font-size: 14px;
    font-weight: 600;
    color:#FFB0CF;
`

export const FontH3 = styled.span`
    font-size: 14px;
    font-weight: 700;
    color: white;
`

export const FontBoxTodoH1 = styled.div`
    height:25px;
    font-size: 14px;
    font-weight: 900;
    color: #FFB0CF;
    border-bottom: 2px solid;
    overflow: auto;
    
`
export const FontBoxTodoH2 = styled.div`
    font-size: 12px;
    height:70px;
    font-weight: 900;
    color: #6969cc;
    margin-top: 7px;
    overflow: auto;
`


export const BoxHeader = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    height: 60px;
    border: 2px solid #FFB0CF;
    border-radius: 10px;
    width: 100vh;
    margin: 0px auto;
    box-shadow: 5px 5px 5px #6969cc;
    padding: 0px 10px;
    margin-top: 5px;
`

export const BoxInputButton = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: row;
    align-items: center;
    height: 60px;
    border-radius: 10px;
    width: 100vh;
    margin: 0px auto;
    background-color: #ffffff;
    box-shadow: 5px 5px 5px #6969cc;
    padding: 0px 10px;
    margin-top: 5px;
`
export const BoxInputButtonH = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: row;
    align-items: center;
    height: 80vh;
    border-radius: 10px;
    width: 100vh;
    margin: 0px auto;
    background-color: #ffffff;
    box-shadow: 5px 5px 5px #6969cc;
    padding: 0px 10px;
    margin-top: 5px;
`

export const BoxMainWarkingName = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    height: 30px;
    border-radius: 6px;
    width: 10vh;
    border: 2px solid #FFB0CF;
    background-color: #A0A0FF;
    box-shadow: 5px 5px 5px #6969cc;
    margin: 0px 10px;
`
export const BoxMainWarkingNameArea = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    height: 40px;
    border-radius: 10px;
    width: 105vh;
    margin: 0px auto;
    margin-top: 60px;
`

export const BoxMainWarkingArea = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: flex-start;
    height: 160px;
    width: 105vh;
    overflow: auto;
    overflow-y: hidden;
    margin: 0px auto;
    &::-webkit-scrollbar {
    width: 2px;
    height: 10px;
    border-radius: 6px;
    background: #6969cc;
    }
    &::-webkit-scrollbar-thumb {
    background: #FFB0CF;
    border-radius: 6px;
    }
    
`

export const BoxTodo = styled.div`
    padding: 6px 9px;
    min-width: 190px;
    height: 130px;
    border-radius: 10px;
    background-color: white;
    box-shadow: 5px 5px 5px #6969cc;
    margin-top: 2px;
    margin-bottom: 5px;
    margin-left: 10px;
`

export const InputStyle = styled.input`
    border: none;
    border-bottom: 2px solid #FFB0CF;
    outline: none;
    margin-right: 40px;
    margin-left: 10px;
    width: 180px;
`
export const HendlerAddButtonStyle = styled.button`
    width: 39px;
    height: 24px;
    padding: 1px 1px;
    border: none;
    border-radius: 3px;
    background-color: #FFB0CF;
    margin-left: auto;
    cursor: pointer;
`

export const HendlerTodoButtonStyle = styled.button`
    height: 24px;
    border: none;
    border-radius: 3px;
    background-color: #FFB0CF;
    margin-right:5px;
    cursor: pointer;
`