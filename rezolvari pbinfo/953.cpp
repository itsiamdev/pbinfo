#include <iostream>

using namespace std;

int main()
{
    long long int q,n,k,i,x,t,p=2,max=0,a;
    cin>>n>>k;
    x=1;
    t=1;
    q=0;
    for (i=0;i<k;i++)
    {
        cin>>a;
        if (a>=t+x)
            {
                if (q>max)
                    {
                        max=q;
                        p=x;
                    }
                while (a>=t+x)
                {
                    t=t+x;
                    x++;
                }
                q=1;
            }
        else
            q++;
    }
    if (q>max)
                    {
                        max=q;
                        p=x;
                    }
    cout<<p<<endl<<2*(n-1);
    return 0;
}