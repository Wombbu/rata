import * as React from 'react';
import * as ReactRedux from 'react-redux';
import { RootState } from '../../state';
import { Train } from '../../state/station/types';
import styled from 'styled-components';
import { Text, SubTitle, CustomSizeText } from '../../components/text';
import { Page } from '../../components/pages';
import { Tabs, Tab, TabDivider } from '../../page-components/tabs';
import { InfoBox } from '../../components/list-item';
const scrollToComponent = require("react-scroll-to-component");

interface ResultPageProps {
  name: string;
  trains: Train[];
}

const ResultPageWrapper = Page.extend`
  height: 100vh;
  padding-top: 3vh;
  box-sizing: border-box;
  position: relative;
`;

const TrainNameWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-self: stretch;
`;

const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const TrainListWrapper = styled.div`
  overflow: scroll;
  width: 80%;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  max-width: 500px;
  margin-bottom: 3vh;
  border-bottom: 1px solid rgba(255,255,255,0.4);
`;

/*const UpButton = styled.span`
  border: 1px solid rgba(255,255,255,0.4);
  border-radius: 50%;
  background-color: rgba(0,0,0,0);
  &:hover {
    background-color: rgba(255,255,255,0.2);
  }
  &:active {
    background-color: rgba(255,255,255,0.4);
  }
  width: 4em;
  height: 4em;
  position: absolute;
  right: 1.5em;
  top: 1.5em;
  display: flex;
  justify-content: center;
  align-items: center;
  color: rgba(255,255,255,0.5);
  font-weight: lighter;
`*/

class ResultPage extends React.Component<ResultPageProps, {trainInfoListRef?: Element}> {

  constructor() {
    super();
    this.state = {};
  }

  render() {
    if (!this.props.name) {
      return null;
    }

    return (
      <ResultPageWrapper href="results">
        <SubTitle> { this.props.name } </SubTitle>
        <Tabs>
          <Tab> Lähtevät </Tab>
          <TabDivider />
          <Tab> Saapuvat </Tab>
        </Tabs>
        <TrainListWrapper
          innerRef={(trainInfoListRef: Element) => {
            if (!this.state.trainInfoListRef) {
              scrollToComponent(trainInfoListRef, {duration: 500})
              this.setState({trainInfoListRef})
            }
          }}
          onWheel={e => {
            if (!this.state.trainInfoListRef) {
              return;
            }
            // Scroll document to bottom before scrolling this element
            if (!((window.innerHeight + window.scrollY) >= document.body.offsetHeight)) {
              e.preventDefault();
              window.scrollBy(e.deltaX, e.deltaY);
            }
          }}
        >
        {this.props.trains.map(train => 
          <InfoBox key={train.scheduledArrival + train.name}>
            <TrainNameWrapper>
              <CustomSizeText size={1.2}> {train.firstStation} - {train.lastStation} </CustomSizeText>
              <CustomSizeText size={1.2}> {train.scheduledArrival} </CustomSizeText>
            </TrainNameWrapper>
            <InfoWrapper>
              <Text size={1}> Raide {train.arrivalTrack} </Text>
              <Text size={1}> {train.arrivalTimeDiff == 0 ? "Aikataulussa" : "Ei aikataulussa"} </Text>
            </InfoWrapper>
          </InfoBox>
        )}
        
        <InfoBox>
          <TrainNameWrapper>
            <CustomSizeText size={1.2}> Tampere - Seinäjoki </CustomSizeText>
            <CustomSizeText size={1.2}> 22.15 </CustomSizeText>
          </TrainNameWrapper>
          <InfoWrapper>
            <Text size={1}> Raide 1 </Text>
            <Text size={1}> Myöhässä 4 min </Text>
          </InfoWrapper>
        </InfoBox>
        <InfoBox>
          <TrainNameWrapper>
            <CustomSizeText size={1.2}> Oulu - Jyväskylä </CustomSizeText>
            <CustomSizeText size={1.2}> 03.30 &#8594; 03.40 </CustomSizeText>
          </TrainNameWrapper>
          <InfoWrapper>
            <Text size={1}> Raide 3 </Text>
            <Text size={1}> Aikaisessa 2 min </Text>
          </InfoWrapper>
        </InfoBox>
        </TrainListWrapper>
        {/*<KnoppiTieto> 6 junaa lähtee seuraavan tunnin aikana </KnoppiTieto>*/}
      </ResultPageWrapper>
    )
  }
}  

const mapStateToProps = (state: RootState) => ({
  trains: state.station.trains,
  name: state.station.name
})

export default ReactRedux.connect(mapStateToProps, () => ({}))(ResultPage);