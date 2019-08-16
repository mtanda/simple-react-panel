import React, { PureComponent } from 'react';
import { PanelProps, PanelPlugin } from '@grafana/ui';
import { getDashboardSrv } from 'app/features/dashboard/services/DashboardSrv';

export class MyPanel extends PureComponent<PanelProps> {
  render() {
    //public/app/features/dashboard/dashgrid/DashboardPanel.tsx
    //    this.loadPlugin(plugin.id);

    const dashboard = getDashboardSrv().getCurrent();
    const panel = dashboard.getPanelById('2');
    console.log(panel);

    return <div>Hello from my panel</div>;
  }
}

export const plugin = new PanelPlugin(MyPanel);
