import React, { Component } from "react";
import { Container} from "@mui/material";

class About extends Component {


  render() {
    return (
      <div className="text-gray">
        <Container maxWidth="md">
          <h1 style={{fontSize: "200%", textAlign: "center", color: 'black', marginTop: '5%', letterSpacing: "0.2em", textShadow: "2px 2px 3px grey"  }}>About VinTracker</h1>
          <p style={{color: "black"}}>
          "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis 
          praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi 
          sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia
           animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio.
            Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod 
            maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus 
            autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates 
            repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus,
           ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.
           "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis 
          praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi 
          sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia
           animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio.
            Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod 
            maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus 
            autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates 
            repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus,
           ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.""
          </p>
        </Container>
      </div>
    );
  }
}

export default About;