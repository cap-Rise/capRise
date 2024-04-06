import React from 'react'
import {
    Tabs,
    TabsHeader,
    TabsBody,
    Tab,
    TabPanel,
  } from "@material-tailwind/react";
  
const TopGnL = () => {
    const data = [
        {
          label: "Top Gainers",
          value: "gainers",
          desc: `Hello`,
        },
        {
          label: "Top Losers",
          value: "losers",
          desc: `hi`,
        },
        ];
  return (
    <div>
        <div className="tabs">
        <Tabs value="gainers">
            <TabsHeader>
              {data.map(({ label, value }) => (
                <Tab  key={value} value={value}>
                  {label}
                </Tab>
              ))}
            </TabsHeader>
            <TabsBody>
              {data.map(({ value, desc }) => (
                <TabPanel key={value} value={value}>
                  {desc}
                </TabPanel>
              ))}
            </TabsBody>
          </Tabs>
          </div>
    </div>
  )
}

export default TopGnL