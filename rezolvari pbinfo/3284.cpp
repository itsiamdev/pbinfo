#include <iostream>
using namespace std;

int main()
{
    int n;
    cin>>n;
    int x,Max=0,Min=1000000000;
    for(int i=1;i<=n;++i)
    {
        cin>>x;
        if(i%2==0&&x>Max)
            Max=x;
        if(i%2&&x>9&&x<100&&x<Min)
            Min=x;
    }
    cout<<Max<<' ';
    if(Min==1000000000)
        cout<<-1;
    else
        cout<<Min;
    return 0;
}