#include <iostream>
#include <algorithm>
#include <cmath>
using namespace std;

int a[1001],n,s,cnt;

int main()
{
    int k;
    cin >>n >> k;
    for(int i=1;i<=n;++i)
        cin >> a[i];
    cnt=1;
    for(int i=1;i<=n;++i){
        s+=a[i];
        if(s+a[i+1]>k)
            cnt++,s=0;
    }
    cout << cnt;


    return 0;
}