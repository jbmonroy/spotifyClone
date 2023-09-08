import { OrderListPipe } from './order-list.pipe';
import * as mockTracks from '../../data/tracks.data.json'
import { TrackModel } from '@core/models/tracks.model';

describe('OrderListPipe', () => {
  it('create an instance', () => {
    const pipe = new OrderListPipe();
    expect(pipe).toBeTruthy();
  });

  it('🟰 Testing in, out of values',() => {
    const pipe = new OrderListPipe();
    const { data }:any = (mockTracks as any).default;
    const result:TrackModel[] = pipe.transform(data);
    expect(result).toEqual(data);
  });

  it('⬆️ Testing  ASC',()=>{
    const pipe = new OrderListPipe();
    const { data }:any = (mockTracks as any).default;
    const firstValue = data.find((item:any)=>item._id === 7)
    const lastValue = data.find((item:any)=>item._id === 6)
    const result:TrackModel[] = pipe.transform(data,'name','asc');
    const firstResult = result[0];
    const lastResult = result[result.length-1];
    expect(firstResult).toEqual(firstValue);
    expect(lastResult).toEqual(lastValue);
  });
  it('⬇️ Testing  DESC',()=>{
    const pipe = new OrderListPipe();
    const { data }:any = (mockTracks as any).default;
    const firstValue = data.find((item:any)=>item._id === 6)
    const lastValue = data.find((item:any)=>item._id === 7)
    const result:TrackModel[] = pipe.transform(data,'name','DESC');
    const firstResult = result[0];
    const lastResult = result[result.length-1];
    expect(firstResult).toEqual(firstValue);
    expect(lastResult).toEqual(lastValue);
  });
});
