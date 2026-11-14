#include <bits/stdc++.h>
#include <math.h>

using namespace std;
ifstream f("sirmaxim.in");
ofstream g("sirmaxim.out");
bool ok;

using namespace std;

int main()
{
    int n,x,minn,maxx,v[21],s,k=0,c[202],ok=0,p=0;
    f>>n;
    for(int i=1;i<=n;i++)
          f>>v[i];
    maxx=v[1];
    for(int i=1;i<=n/2;i++)
        {
            if(v[i]>maxx) maxx=v[i];
        }
    for(int i=n/2+1;i<=n;i++)
        if(maxx==v[i]) p++;

    g<<p;
}