import styled from 'styled-components'

export const Container = styled.div`
  padding: 15px;
  margin-bottom: 10px;
  position: relative;
  background: #fff;
  border-radius: 5px;
  box-shadow: 0 1px 4px 0 rgba(192, 208, 230, 0.8);
  border-top: 20px solid rgba(230, 236, 245, 0.4);
  cursor: grab;

  header {
    position: absolute;
    top: -22px;
    left: 15px;
  }

  p {
    font-weight: 500;
    line-height: 20px;
  }
  img {
    margin-top: 5px;
    width: 24px;
    height: 24px;
    border-radius: 3px;
  }
`
export const Label = styled.span`
  width: 10px;
  height: 10px;
  border-radius: 2px;
  display: inline-block;
  background: ${ props => props.color };

`