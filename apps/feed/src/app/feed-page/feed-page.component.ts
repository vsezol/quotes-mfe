import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-feed-page',
  standalone: true,
  templateUrl: './feed-page.component.html',
  styleUrls: ['./feed-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FeedPageComponent {}
