import * as React from 'react';
import styled from 'styled-components';
import { Text, SubTitle, CustomSizeText } from '../../components/text';
import { Page } from '../../components/pages';
import { Tabs, Tab, TabDivider } from '../../page-components/tabs';
import { InfoBox } from '../../components/list-item';

const ResultPage = Page.extend`
  min-height: 100vh;
  padding-top: 3vh;
  box-sizing: border-box;
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

export default (props: any) => 
  <ResultPage> 
    <SubTitle> Jyväskylän asema </SubTitle>
    <Tabs>
      <Tab> Lähtevät </Tab>
      <TabDivider />
      <Tab> Saapuvat </Tab>
    </Tabs>
    <InfoBox>
      <TrainNameWrapper>
        <CustomSizeText size={1.2}> Helsinki - Oulu </CustomSizeText>
        <CustomSizeText size={1.2}> 22.00 </CustomSizeText>
      </TrainNameWrapper>
      <InfoWrapper>
        <Text size={1}> Raide 2 </Text>
        <Text size={1}> Aikataulussa </Text>
      </InfoWrapper>
    </InfoBox>
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
    
    {/*<KnoppiTieto> 6 junaa lähtee seuraavan tunnin aikana </KnoppiTieto>*/}
  </ResultPage>;