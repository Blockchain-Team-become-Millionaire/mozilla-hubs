import React from "react";
import { Popover } from "../popover/Popover";
import { ToolbarButton } from "../input/ToolbarButton";
import { RoomLayout } from "../layout/RoomLayout";
import { ReactComponent as InviteIcon } from "../icons/Invite.svg";
import { InvitePopover } from "./InvitePopover";
import { RoomContext } from "./RoomContext";

export default {
  title: "InvitePopover"
};

const roomContextMock = {
  url: "hubs.link/oggNnrN",
  code: "478816",
  embed:
    '<iframe src="https://hubs.mozilla.com/oggNnrN/handsome-famous-park?embed_token=5555555555555555555555555" style="width: 1024px; height: 768px;" allow="microphone; camera; vr; speaker;"></iframe>'
};

export const Base = () => (
  <RoomContext.Provider value={roomContextMock}>
    <RoomLayout
      toolbarCenter={
        <Popover title="Invite" content={InvitePopover} placement="top" offsetDistance={28} initiallyVisible>
          {({ togglePopover, popoverVisible, triggerRef }) => (
            <ToolbarButton
              ref={triggerRef}
              icon={<InviteIcon />}
              selected={popoverVisible}
              onClick={togglePopover}
              label="Invite"
            />
          )}
        </Popover>
      }
    />
  </RoomContext.Provider>
);

Base.parameters = {
  layout: "fullscreen"
};
