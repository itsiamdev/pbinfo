#include <iostream>
#include <fstream>
using namespace std;

int main()
{
    long long int a,MAX,MAXmin=0,nr,nrmin=1000000000;
    ifstream f("maxim5.in");
    ofstream g("maxim5.out");
    f>>a;
    while(!f.eof())
    {
        nr=0;
        MAX=a;
        do
        {
            if(a>MAX)
                MAX=a;
            nr++;
            f>>a;
        }
        while(a);
        if(nr<=nrmin)
        {
            if(nr<nrmin)
                MAXmin=MAX;
            if(nr==nrmin&&MAX>MAXmin)
                MAXmin=MAX;
            nrmin=nr;
        }
        f>>a;
    }
    g<<MAXmin;
    return 0;
}