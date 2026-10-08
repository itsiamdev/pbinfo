#include <fstream>
#include <iostream>
using namespace std;

int k = 0;

int TransfInCifra(int x)
{
   if (x < 0)  return x += 10;
   if (x > 9)  return x -= 10;
   return x;
}

int main()
{
   ifstream fin ("robot3.in");
   ofstream fout ("robot3.out");
   int cerinta, cate = 0, i;
   fin >> cerinta;

   if (cerinta <= 2)
   {
      char carac;
      if (cerinta == 1)
      {
         while (fin.get(carac))
            if (carac == 'A')
               cate++;
         fout << cate;
      }
      else
      {
         string instr;
         fin >> instr;
         instr = instr.substr(0, instr.length()-1);
         for (i=0; 1u*i<instr.length(); ++i)
            if (instr[i] == 'D')
               k = (k + (instr[++i] - '0')) % 10;
            else if (instr[i] == 'S')
               k = (k - (instr[++i] - '0') + 10) % 10;
            else
               fout << k;
      }
   }
   else
   {
      int o, j;
      string nr, raspuns;
      fin >> nr;
      for (i=0; 1u*i<nr.length(); ++i)
      {
         o = TransfInCifra(k-1);
         for (j=1; o != TransfInCifra(k+5); o = TransfInCifra(o-1), ++j)
            if (nr[i] - '0' == o)
               { raspuns += 'S' + to_string(j);   k = o;   break; }
         if (o == TransfInCifra(k+5))
         {
            o = TransfInCifra(k);
            for (j=0; o != TransfInCifra(k+6); o = TransfInCifra(o+1), ++j)
               if (nr[i] - '0' == o)
                  { raspuns += 'D' + to_string(j);   k = o;   break; }
         }
      }

      for (i=1; 1u*i<raspuns.length(); i+=2)
      {
         if (raspuns[i] == '0')
            fout << 'A';
         else
            fout << raspuns[i-1] << raspuns[i] << 'A';
      }
      fout << 'T';
   }
   return 0;
}