#include <bits/stdc++.h>
using namespace std;

int main()
{
    unsigned long long n;
    double r;
    cin>>n;
    for(unsigned long long i = 1; i * i <= n;i++)
    {
        r=sqrt(n-i*i);
        if((unsigned long long)r==r)
        {
            if(r*r+i*i)
            {
                cout<<i*i<<" "<<n-i*i;
                return 0;
            }
        }
    }
    cout<<"NU";
}