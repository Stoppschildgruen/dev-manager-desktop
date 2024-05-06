import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DebugRoutingModule} from "./debug-routing.module";
import {DebugComponent} from './debug.component';
import {NgbNavModule, NgbTooltipModule} from "@ng-bootstrap/ng-bootstrap";
import {CrashesComponent} from "./crashes/crashes.component";
import {SharedModule} from "../shared/shared.module";
import {PmLogComponent} from './pmlog/pmlog.component';
import {LogReaderComponent} from './log-reader/log-reader.component';
import {TerminalModule} from "../terminal";
import {DmesgComponent} from "./dmesg/dmesg.component";
import {PmLogControlComponent} from './pmlog/control/control.component';
import {SetContextComponent} from './pmlog/set-context/set-context.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {DetailsComponent} from './crashes/details/details.component';
import {LsMonitorComponent} from "./ls-monitor/ls-monitor.component";


@NgModule({
    declarations: [
        DebugComponent,
        CrashesComponent,
        PmLogComponent,
        LogReaderComponent,
        DmesgComponent,
        PmLogControlComponent,
        SetContextComponent,
        DetailsComponent,
        LsMonitorComponent,
    ],
    imports: [
        CommonModule,
        DebugRoutingModule,
        NgbNavModule,
        NgbTooltipModule,
        SharedModule,
        TerminalModule,
        FormsModule,
        ReactiveFormsModule
    ]
})
export class DebugModule {
}
