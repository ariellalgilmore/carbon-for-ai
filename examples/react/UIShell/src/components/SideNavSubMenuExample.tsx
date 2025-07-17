/**
 * @license
 *
 * Copyright IBM Corp. 2025
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import type { routesType } from '../config/routes';
import { SideNavMenu, SideNavMenuItem } from '@carbon-labs/react-ui-shell';
import { Link, useLocation } from 'react-router';

export const SideNavSubMenuExample = (route: routesType) => {
  const location = useLocation();
  const { path, carbon } = route;

  if (!carbon || !carbon.subMenu || path === undefined) {
    return;
  }

  return (
    <SideNavMenu renderIcon={carbon?.icon} title={carbon?.label}>
      {carbon.subMenu?.map((item) => {
        return (
          <SideNavMenuItem
            key={path}
            as={Link}
            to={item.path}
            isActive={item.path === location.pathname}>
            {item.carbon?.label}
          </SideNavMenuItem>
        );
      })}
    </SideNavMenu>
  );
};
