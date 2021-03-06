import * as React from 'react';
import * as ReactRedux from 'react-redux';
import { RootState } from '../../state';
import { Train } from '../../state/station/types';
import styled from 'styled-components';
import { Text, SubTitle, CustomSizeText } from '../../components/text';
import { ResultPageWrapper } from '../../components/pages';
import { Tabs, Tab, TabDivider } from '../../page-components/tabs';
import { InfoBox } from '../../components/list-item';
import SmartScrollResultList from '../../page-components/smart-scroll-result-list';
    
interface ResultPageProps {
  name: string;
  trains: Train[];
}

const TrainNameWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-self: stretch;
`;

const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

class StationResultPage extends React.Component<ResultPageProps, {trainInfoListRef?: Element, arrivals: boolean}> {

  constructor() {
    super();
    this.state = {arrivals: true};
  }

  render() {
    if (!this.props.name) {
      return null;
    }

    return (
      <ResultPageWrapper href="results">
        <SubTitle> { this.props.name } </SubTitle>
        <Tabs>
          <Tab
            active={this.state.arrivals}
            onClick={() => this.setState({arrivals: true})}
          > Lähtevät </Tab>
          <TabDivider />
          <Tab
            active={!this.state.arrivals}
            onClick={() => this.setState({arrivals: false})}
          > Saapuvat </Tab>
        </Tabs>
        <SmartScrollResultList>
          {this.props.trains.map(train => 
            this.state.arrivals ? <Arrivals train={train} /> : <Departures train={train} />
          )}
        </SmartScrollResultList>
        {/*<KnoppiTieto> 6 junaa lähtee seuraavan tunnin aikana </KnoppiTieto>*/}
      </ResultPageWrapper>
    )
  }
}

const Arrivals = (props: {train: Train}) =>
  <InfoBox key={props.train.scheduledArrival + props.train.name}>
    <TrainNameWrapper>
      <CustomSizeText size={1.2}> {props.train.firstStation} - {props.train.lastStation} </CustomSizeText>
      <ArrivalTime 
        scheduledArrival={props.train.scheduledArrival}
        estimatedArrival={props.train.estimatedArrival}
      />
    </TrainNameWrapper>
    <InfoWrapper>
      <Text size={1}> Raide {props.train.arrivalTrack} </Text>
      <Text size={1}> {props.train.arrivalTimeDiff == 0 ? "Aikataulussa" : "Ei aikataulussa"} </Text>
    </InfoWrapper>
</InfoBox>;


const Departures = (props: {train: Train}) =>
  <InfoBox key={props.train.scheduledDeparture + props.train.name}>
    <TrainNameWrapper>
      <CustomSizeText size={1.2}> {props.train.firstStation} - {props.train.lastStation} </CustomSizeText>
      <ArrivalTime 
        scheduledArrival={props.train.scheduledDeparture}
        estimatedArrival={props.train.estimatedDeparture}
      />
    </TrainNameWrapper>
    <InfoWrapper>
      <Text size={1}> Raide {props.train.departureTrack} </Text>
      <Text size={1}> {props.train.departureTimeDiff == 0 ? "Aikataulussa" : "Ei aikataulussa"} </Text>
    </InfoWrapper>
</InfoBox>;

const ArrivalTime = (props: {scheduledArrival: string, estimatedArrival: string}) => {
  if (props.estimatedArrival && props.estimatedArrival !== props.scheduledArrival) {
    return <CustomSizeText size={1.2}> {props.scheduledArrival} &#8594; {props.estimatedArrival} </CustomSizeText>
  }
  return <CustomSizeText size={1.2}> {props.scheduledArrival} </CustomSizeText>
}

const mapStateToProps = (state: RootState) => ({
  trains: state.station.trains,
  name: state.station.name
})

export default ReactRedux.connect(mapStateToProps, () => ({}))(StationResultPage);