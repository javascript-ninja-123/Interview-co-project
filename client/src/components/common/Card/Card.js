import React from 'react'
import './Card.css'
import { Button, Card, Image } from 'semantic-ui-react'

const CARD = ({image,header,metadata = [],description,buttonName1,buttonName2,onClick1,onClick2 }) => (
    <div className='Card'>
    <Card>
      <Card.Content>
        <Image floated='right' size='mini' src={image} />
        <Card.Header>
          {header}
        </Card.Header>
        <Card.Meta>
          {
            metadata.map((value,key) => {
              return (
                <p key={key}>{value}</p>
              )
            })
          }
        </Card.Meta>
        <Card.Description>
          {description}
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <div className='ui two buttons'>
          <Button basic color='green' onClick={onClick1}>{buttonName1}</Button>
          <Button basic color='red' onClick={onClick2}>{buttonName2}</Button>
        </div>
      </Card.Content>
    </Card>
  </div>
)

export {CARD}
