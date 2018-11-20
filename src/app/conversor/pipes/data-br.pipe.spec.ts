import { DataBrPipe } from './data-br.pipe';

describe('DataBrPipe', () => {
  it('create an instance', () => {
    const pipe = new DataBrPipe();
    expect(pipe).toBeTruthy();
  });

  it('deve formatar a data 1983-02-20 para 20/02/1983',()=>{
    const pipe = new DataBrPipe();
    expect(pipe.transform('1983-02-20')).toEqual('20/02/1983');
  })
});
