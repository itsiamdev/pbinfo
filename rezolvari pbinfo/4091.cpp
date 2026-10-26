#include <iostream>
#include <fstream>
using namespace std;

int vcmddcn(int n)
{
    while(n)
        if(n%10)
            return n%10;
        else
            n/=10;
    return -1;
}

int main()
{
    int C,N;
    ifstream f("sss.in");
    f>>C>>N;
    int a[N+1],s[N+1];s[0]=0;
    for(int i=1;i<=N;++i)
        f>>a[i],s[i]=s[i-1]+a[i];
    ofstream g("sss.out");
    if(C==1)
    {
        int c=vcmddcn(a[1]),s=0;
        for(int i=N;i>N-c;--i)
            s+=a[i];
        g<<s;
    }
    else
    {
        int S,Max=0;
        for(int i=N,j=1;i>0;)
        {
            S=s[i]-s[i-j];
            Max=max(S,Max);
            i-=j;
            ++j;
        }
        g<<Max;
    }
    return 0;
}