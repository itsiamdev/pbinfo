#include <iostream>
#include <fstream>
using namespace std;
int n,i,j,max1=-1,max2=-1,s,nr;
int main()
{ifstream fin("triviador.in");
 ofstream fout("triviador.out");
 fin>>n;
 for(i=1;i<=n;i++)
 {  s=0;
    for(j=1;j<=3;j++)
        {fin>>nr;
         s=s+nr;}
    if(s>max1)
    {
        max2=max1;
        max1=s;
    }
    else if(s>max2&&s!=max1)
           max2=s;

 }
if(max1!=max2&&max2!=-1)
    fout<<max1<<" "<<max2;
else fout<<"TOTI SUNT CASTIGATORI";
return 0;
}
