import React, { FC, HTMLAttributes, useCallback, useState } from "react"
import styled from "styled-components"
import { Index } from "../../constants/siteConstants"
import { CursorRow } from "../CursorRow"
import { AsciiComputer } from "../AsciiComputer"
import { AutoplayVideos } from "../AutoplayVideos"

export const DesktopIndex: FC<HTMLAttributes<HTMLDivElement>> = ({
  className,
}) => {
  const [startTypingIndex, setStartTypingIndex] = useState(0);

  const onFinishTypingRow = useCallback(
    () => {
      setStartTypingIndex(startTypingIndex + 1);
    }, [ startTypingIndex, setStartTypingIndex ]
  );


  return (
    <div className={className ?? ""}>
      <HeaderContainer>
        <Header>{Index.headerName}</Header>
      </HeaderContainer>
      <ContentContainer>
        <BioContainer>
          {
            Index.intro.map((introSection, introIndex) => (
              <CursorRow 
                text={ introSection }
                key={ introIndex }
                startTyping={ startTypingIndex === introIndex }
                onComplete={ onFinishTypingRow }
              />
            ))
          }
        </BioContainer>
        <ComputerContainer>
          <AsciiComputer>
            <ComputerContent />
          </AsciiComputer>
        </ComputerContainer>
      </ContentContainer>
    </div>
  )
}

const HeaderContainer = styled.div`
  margin-bottom: 20px;
  display: flex;
  justify-content: center;
`

const ComputerContent = styled(AutoplayVideos)`
  width: 100%;
  height: 100%;
`

const Header = styled.pre`
  color: white;
  margin: 0;
  padding: 0;
  display: inline-block;
`

const ContentContainer = styled.div`
  display: flex;
  flex-direction: row;
  height: 100%;
  flex-grow: 0;
`;

const DashedContainer = styled.div`
  border: 5px dashed white;
  padding: 15px;
  flex-grow: 1;
  width: 45%;
`;

const BioContainer = styled(DashedContainer)`
  margin-right: 25px;
  display: grid;
  grid-row-gap: 15px;
`

const ComputerContainer = styled(DashedContainer)`
  display: flex;
  align-items: center;
  justify-content: center;
`
