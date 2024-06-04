import React, { Component } from "react";
import { UserContext, ChannelContext } from "../App";

class ComponentF extends Component {
  render() {
    return (
      <div>
        <UserContext.Consumer>
          {(user) => {
            return (
              <ChannelContext.Consumer>
                {(channel) => {
                  return (
                    <div>
                      User Context : {user}, Channel {channel}
                    </div>
                  );
                }}
              </ChannelContext.Consumer>
            );
          }}
        </UserContext.Consumer>
      </div>
    );
  }
}

export default ComponentF;
