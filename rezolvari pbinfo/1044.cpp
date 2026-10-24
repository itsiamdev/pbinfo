#include <fstream>
using namespace std;

int n, x, k;
ifstream f("piramide.in");
ofstream g("piramide.out");

int main()
{
    int p=0, a=0, m=0, c=0,i,ca,b=1,cfol=0,cp,nra, maxnra=0;
    f>>n>>x>>k;
    i=1;
    f>>ca;
    do  
        {  b++;
           nra=0;
           cp=b*(b+1)/2;
           if(cp+cfol<=n) 
             {  m++;
                if(cfol<x && x<=cp+cfol) p=m;
                cfol+=cp;
                while(ca<=cfol && i<=k)
                    { nra++;f>>ca;i++;} 
                if(nra>maxnra)
                    { a=m; maxnra=nra; }
             }
             else break;
         } while (cfol<n);
    c=n-cfol;
    g<<p<<endl<<m<<endl<<c<<endl<<a<<endl;
    return 0;
}