#include <fstream>
#include <climits>
using namespace std;
ifstream cin("fotbal.in");
ofstream cout("fotbal.out");
long long s,maxx,n,i,c,e,p,minn;
int main()
{
    cin>>n;
    if(n%2==0)
    {
        for(i=1;i<=n;i++)
        {
            cin>>c>>p>>e;
            s=c*3+e;
            maxx=max(maxx,s);
        }
        cout<<maxx;
    }
    else
    {
        minn=INT_MAX;
        for(i=1;i<=n;i++)
        {
            cin>>c>>p>>e;
            if(p)
            {
                minn=min(minn,p);
            }
        }
        cout<<minn;
    }
}