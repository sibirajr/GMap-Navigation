import { GMapsModule } from './gmaps.module';

describe('GMapsModule', () => {
  let gMapsModule: GMapsModule;

  beforeEach(() => {
    gMapsModule = new GMapsModule();
  });

  it('should create an instance', () => {
    expect(gMapsModule).toBeTruthy();
  });
});
