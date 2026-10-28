#include <iostream>
#include <cmath>
using namespace std;

int main()
{
    unsigned long long int S,n,i,a,MAX,nr,nc;
    cin>>S>>n;
    cin>>a;
    MAX=S/a;
    nc=S/a;
    nr=1;
    for(i=2;i<=n;i++)
    {
        cin>>a;
        if(S/a>MAX)
        {
            nc=S/a;
            nr=i;
            MAX=S/a;
        }
    }
    cout<<nc<<' '<<nr;
    return 0;
}