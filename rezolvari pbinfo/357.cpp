#include <iostream>
#include <fstream>
#include <math.h>

using namespace std;
ifstream f("2lan.in");
ofstream g("2lan.out");
bool ok;

using namespace std;

int main()
{
   int n,v[2001],maxx=1001,s,o,j;
   cin>>n;
   for(int i=1;i<=2*n;i++)
       cin>>v[i];
    for(int i=1;i<=2*n;i++)
    {
       s=v[i]-v[i+1];
       if(s<0) s=(-1)*s;
       if(s<=maxx) {maxx=s;o=i+1;}
       i++;

    }
    cout<<o/2;
}