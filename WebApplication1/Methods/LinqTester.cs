using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace WebApplication1
{
    class LinqTester
    {



        public static void Tests()
        {

            var testList1 = new (
                int id,
                int field1,
                string field2)[]
                    {
                            ( 1, 350, "item 1" ),
                            ( 2, 330, "item 44" ),
                            ( 3, 120, "item 51" ),
                            ( 4, 200, "item 3" )
                    }
                    .ToList();


            var testList2 = new (
                    int id,
                    int price,
                    int count)[]
                        {
                            ( 1, 350, 100 ),
                            ( 2, 330, 100 ),
                            ( 3, 120, 100 ),
                            ( 4, 200, 100 )
                        }
                        .ToList();

            //var l = testList1.FindAll(x => x.id == 6).ToList();

            //var l2 = testList1.Where(x => testList2.Any(y => x.id == y.id)).Select(t=> new {tr=9, kk=t.id, lll=7 });

            //var l3 = testList1.Select(x=> testList2.

            //Modification

            var r = testList1.Join(testList2, x => x.id, y => y.id, (x, y) =>
                    new { r = x.field2, f = y.price });



            testList1.Join(testList2, x => x.id, y => y.id, (x, y) =>
            {
                x.field1 = y.price;
                x.field2 = y.price.ToString();
                return y;
            })
                 .Where(f => f.price == 9);



            testList1.ForEach(x => x.id = testList2.
                      FirstOrDefault(y => y.id == x.id).price);


            #region

            testList1.RemoveAll(x => x.field2 == null);

            testList1.ForEach(x => x.field2 = "55");

            testList1.Select(x => { x.field2 = "foo"; x.field1 = 9; return x; });

            testList1.FindAll(x => x.id == 9)
                .ForEach(x => x.id = 88);

            testList1.FindAll(x => x.id == 9)
                .ForEach(x => { x.id = 88; x.field1 = x.id * 4; });

            testList1.FindAll(x => x.id != 9 && x.id > 8)
                .ForEach(x => x.id = 88);





            #endregion


            //Selection

            #region

            var column10 = testList1
                .Select(x => x.id)
                .ToList();


            column10.ForEach(x => x = 7);

            column10.FindAll(x => x == 9)
                .ForEach(x=> x = 88);
          
            
            //Readonly

            var column11 = testList1
                .Select(x => new { id = x.id, fl = x.field1 })
                .ToList();

            var column12 = testList1
                .Select(x =>  new Tuple<int,int> (  x.id,  x.field1 ))
                .ToList();
            var column13 = testList1
                .ToDictionary(x => x.id, x => x.field1);
            
            var column20 = testList1
                .FindAll(x => x.field2 == "44")
                .ToList();
            
            var column21 = testList1
                .FindAll(x => x.field2 == "44")
                .Select(y=> new { idn = y.id, f1n = y.field2 })
                .ToList();

            #endregion


            //Writeable

            #region

            var testList1c12NT = testList1
                .Select(x => (A: x.id, B: x.field2))
                .ToList();

            testList1c12NT.ForEach(x => x = (500, "55"));
            
            testList1c12NT.ForEach(x => x.A = 7);
            
            testList1c12NT.FindAll(x => x.A == 8)
                .ForEach(x => x.A = 9);

            #endregion


            //Group

            #region

            var gs = testList1
                .GroupBy(x => x.field2)
                .ToList();
            
            var gsl = testList1
                .GroupBy(x => x.field2)
                .Select(g => g.ToList())
                .ToList();
            
            var gp = testList1
                .GroupBy(x => x.field2)
                .Select(g => new { id = g.Key, items = g.ToList() })
                .ToList();

            var gn = testList1
                .GroupBy(x => x.field2)
                .Select(g => g
                .Select(f => new { id = f.id, key = g.Key })
                .ToList())
                .ToList();




            gsl[0][0] = (6, 6, "66");


            var gg = testList1
                .Select((x, i) => i.ToString())
                .ToList();

            #endregion


            //Reflection

            #region 

            var ttt = gn.GetType();

            var tttt = gn.GetType()
                .GetProperties();

            var lt = tttt
                .Select(x => x.PropertyType
                .ToString())
                .ToList();


            var lt2 = tttt
               .Select(x => x.PropertyType )
               .ToList();



            (int dd, bool cc) v = (4, false);


            v.GetType().GetProperty("44").SetValue(v, 4, null);

            v.GetType().GetProperties().Select(x => { x.SetValue(v, 5, null); return x; });

            v.GetType().GetProperties().Select(x => { x.SetValue(v, x.GetValue(v,null), null); return x; });


            #endregion






            //  var tuples = source.Select<TypeOfSource, (int A, int B)>(x => (x.A, x.B));


            List<coin> result = new List<coin>();
            while (result.Any())
            {
                var totalt = result.Sum(c => c.FaceValue);
                var max = result.Select((c, i) => new { i, p = c.FaceValue * c.Quantity }).Aggregate((a, b) => a.p > b.p ? a : b);
                if (totalt > max.p) break;
                result.RemoveAt(max.i);
            }



            int total = testList1
                .Select(i => i.id)
                .Sum();
            
            int count = testList1
                .FindAll(i => i.id==9)
                .Count;



        }

       
    }

    class coin
    {
        public int ID { get; set; }
        public double FaceValue { get; set; }
        public double Quantity { get; set; }
    }

    public class A
    {
        public string aField { get; set; }
    }

}
