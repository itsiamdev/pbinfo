#include <iostream>
using namespace std;

int main()
{
    int  n,s,a=1,b,nr=0,i,x,y,sy;
    cin>>n>>s;
    for(i=1;i<n;i++)
        a=a*10;
    b=a*10-1;
    for(x=a; x<=b; x++)
        { y=x; sy=0;
          while(y>0)
          {
              sy=sy+y%10;
              y=y/10;
          }
          if(sy==s)
                { nr++;
                  cout<<x<<" ";
                }
        }
    if(nr>0)cout<<endl;
    cout<<nr;
    return 0;
}