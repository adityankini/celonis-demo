import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AnalyticsFeatureDashboard } from './analytics-feature-dashboard';

describe('AnalyticsFeatureDashboard', () => {
  let component: AnalyticsFeatureDashboard;
  let fixture: ComponentFixture<AnalyticsFeatureDashboard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AnalyticsFeatureDashboard],
    }).compileComponents();

    fixture = TestBed.createComponent(AnalyticsFeatureDashboard);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
