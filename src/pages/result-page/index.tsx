import * as React from 'react';
import { Text, SubTitle } from '../../components/text';
import { Page } from '../../components/pages';
import { Tabs, Tab, TabDivider } from '../../page-components/tabs';
import { InfoBox } from '../../components/list-item';

const ResultPage = Page.extend`
  min-height: 100vh;
  padding-top: 3vh;
  box-sizing: border-box;
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
      <Text size={1.6}> IC-51 </Text>
      <Text size={1}> Juuh elikkäs </Text>
      <Text size={1}> Khyl </Text>
    </InfoBox>
    <InfoBox>
      <Text size={1.6}> IC-51 </Text>
      <Text size={1}> Juuh elikkäs </Text>
      <Text size={1}> Khyl </Text>
    </InfoBox>
    <InfoBox>
      <Text size={1.6}> IC-51 </Text>
      <Text size={1}> Juuh elikkäs </Text>
      <Text size={1}> Khyl </Text>
    </InfoBox>
    {/*<KnoppiTieto> 6 junaa lähtee seuraavan tunnin aikana </KnoppiTieto>*/}
  </ResultPage>;