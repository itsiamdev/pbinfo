#include <iostream>
using namespace std;

int main()
{
    int n, nr, min, max=0, s=0, ok=0, i;
    cin>>n;
    for(i=1;i<=n;i++)
    {
        cin>>nr;
        if(ok==0)
            {
                ok=1;
                min=nr;
            }
        if(nr>max)
            max=nr;
        if(nr<min)
            min=nr;

    }
    s=min+max;
    cout<<s;
}