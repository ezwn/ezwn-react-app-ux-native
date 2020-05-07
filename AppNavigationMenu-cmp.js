import React from "react";

import { NavigationMenu } from "ezwn-ux-native/app-components/NavigationMenu-cmp";
import { useAppContext } from "ezwn-react-app/App-ctx";

export const AppNavigationMenu = () => {
  const { features } = useAppContext();

  return (
    <NavigationMenu>
      {features.map((feature) => (
        <React.Fragment key={feature.id}>
          {feature.navigationMenuItems}
        </React.Fragment>
      ))}
    </NavigationMenu>
  );
};
