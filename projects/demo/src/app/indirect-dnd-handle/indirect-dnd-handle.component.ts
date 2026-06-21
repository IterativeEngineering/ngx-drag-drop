import { Component, HostBinding } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { DndHandleDirective } from 'ngx-drag-drop';

@Component({
  templateUrl: './indirect-dnd-handle.component.html',
  styleUrls: ['./indirect-dnd-handle.component.scss'],
  standalone: true,
  imports: [MatIconModule, DndHandleDirective],
